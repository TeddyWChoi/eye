import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import mapImage from 'figma:asset/b1fd1c8bbec915e1edcb37bb0005b4fc5b4a1b0c.png';

interface Message {
  id: string;
  user: string;
  message: string;
  timestamp: number;
  isGhost?: boolean;
}

interface Spot {
  id: number;
  name: string;
  position: { x: string; y: string };
  messages: Message[];
}

const spots: Spot[] = [
  {
    id: 1,
    name: '기숙사 로비 (처녀귀신)',
    position: { x: '28%', y: '42%' },
    messages: [
      { id: '1', user: '익명의 목격자', message: '여기서 긴 머리 여자 봤어요...', timestamp: Date.now() - 3600000 },
      { id: '2', user: '귀신헌터', message: '처녀귀신 출몰 확인', timestamp: Date.now() - 1800000 },
    ]
  },
  {
    id: 2,
    name: '폐건물 옥상 (비명하는 여인)',
    position: { x: '45%', y: '38%' },
    messages: [
      { id: '3', user: '학생1', message: '비명소리가 들려요...', timestamp: Date.now() - 7200000 },
      { id: '4', user: '???', message: '아아아악!!!', timestamp: Date.now() - 3600000, isGhost: true },
    ]
  },
  {
    id: 3,
    name: '어두운 숲길 (쌍둥이)',
    position: { x: '68%', y: '35%' },
    messages: [
      { id: '5', user: '???', message: '같이 놀아요...', timestamp: Date.now() - 300000, isGhost: true },
      { id: '6', user: '목격자', message: '손 잡은 아이들이...', timestamp: Date.now() - 500000 },
    ]
  },
  {
    id: 4,
    name: '캠퍼스 중앙 (귀문)',
    position: { x: '52%', y: '55%' },
    messages: [
      { id: '7', user: '야간순찰', message: '여기 절대 가지 마세요', timestamp: Date.now() - 900000 },
      { id: '8', user: '연구원', message: '차원이 뒤틀린 것 같습니다', timestamp: Date.now() - 600000 },
    ]
  },
  {
    id: 5,
    name: '연구동 복도 (대학원생)',
    position: { x: '35%', y: '58%' },
    messages: [
      { id: '9', user: '대학원생', message: '밤늦게까지 불 켜진 방 있음', timestamp: Date.now() - 450000 },
      { id: '10', user: '???', message: '논문... 끝내야 해...', timestamp: Date.now() - 200000, isGhost: true },
    ]
  },
  {
    id: 6,
    name: '211호 연구실 (연구원의 망령)',
    position: { x: '62%', y: '52%' },
    messages: [
      { id: '11', user: '청소부', message: '여기 들어가면 안 됩니다', timestamp: Date.now() - 1200000 },
      { id: '12', user: '???', message: '불멸... 성공했어...', timestamp: Date.now() - 100000, isGhost: true },
    ]
  }
];

interface CommunityPageProps {
  onClose: () => void;
}

export function CommunityPage({ onClose }: CommunityPageProps) {
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);
  const [messageInput, setMessageInput] = useState('');
  const [localMessages, setLocalMessages] = useState<Record<number, Message[]>>({});

  const handleSendMessage = () => {
    if (!messageInput.trim() || !selectedSpot) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      user: '나',
      message: messageInput,
      timestamp: Date.now()
    };

    setLocalMessages(prev => ({
      ...prev,
      [selectedSpot.id]: [...(prev[selectedSpot.id] || []), newMessage]
    }));

    setMessageInput('');

    // Random ghost message chance
    if (Math.random() > 0.7) {
      setTimeout(() => {
        const ghostMessage: Message = {
          id: (Date.now() + 1).toString(),
          user: '???',
          message: ['...', '여기 있어요', '나를 찾아줘', '도와줘...'][Math.floor(Math.random() * 4)],
          timestamp: Date.now(),
          isGhost: true
        };
        
        setLocalMessages(prev => ({
          ...prev,
          [selectedSpot.id]: [...(prev[selectedSpot.id] || []), ghostMessage]
        }));
      }, 2000 + Math.random() * 3000);
    }
  };

  const getAllMessages = (spot: Spot) => {
    return [...spot.messages, ...(localMessages[spot.id] || [])];
  };

  const formatTime = (timestamp: number) => {
    const diff = Date.now() - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    
    if (minutes < 1) return '방금 전';
    if (minutes < 60) return `${minutes}분 전`;
    return `${hours}시간 전`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-black z-50"
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4 z-10 backdrop-blur-sm border-b border-red-900/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-red-500" />
            <div>
              <h2 className="text-white">커뮤니티</h2>
              <p className="text-sm text-gray-400">귀신스팟을 찾아라</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Map View */}
      <AnimatePresence mode="wait">
        {!selectedSpot ? (
          <motion.div
            key="map"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute inset-0 pt-20"
          >
            {/* Map Container */}
            <div className="relative w-full h-full p-4">
              <div className="relative w-full h-[60%] mx-auto max-w-md">
                {/* Map Image with glitch overlay */}
                <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-red-900/50 shadow-lg shadow-red-900/30">
                  <img 
                    src={mapImage} 
                    alt="Campus Map" 
                    className="w-full h-full object-contain bg-gray-900"
                  />
                  
                  {/* Glitch overlay */}
                  <motion.div
                    animate={{
                      opacity: [0, 0.1, 0, 0.05, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      times: [0, 0.1, 0.2, 0.8, 1]
                    }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'repeating-linear-gradient(0deg, transparent 0px, rgba(255, 0, 100, 0.1) 2px, transparent 4px)',
                    }}
                  />

                  {/* Spots */}
                  {spots.map((spot) => (
                    <motion.button
                      key={spot.id}
                      onClick={() => setSelectedSpot(spot)}
                      className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2"
                      style={{ left: spot.position.x, top: spot.position.y }}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: spot.id * 0.2
                      }}
                    >
                      <div className="relative w-full h-full">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-red-500 rounded-full blur-sm opacity-60" />
                        {/* Spot marker */}
                        <div className="absolute inset-0 bg-red-600 rounded-full border border-red-300 shadow-lg shadow-red-500/50" />
                        {/* Pulse ring */}
                        <motion.div
                          className="absolute inset-0 border border-red-400 rounded-full"
                          animate={{
                            scale: [1, 1.8, 1],
                            opacity: [0.8, 0, 0.8]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: spot.id * 0.2
                          }}
                        />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Info text */}
              <div className="mt-8 px-4 max-w-md mx-auto">
                <motion.p 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-center text-red-400 text-sm"
                >
                  빨간 점을 터치하여 해당 스팟의 대화에 참여하세요
                </motion.p>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Chat View */
          <motion.div
            key="chat"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute inset-0 pt-20 pb-20 flex flex-col bg-black"
          >
            {/* Chat Header */}
            <div className="px-4 py-3 bg-red-950/30 border-b border-red-900/50 backdrop-blur-sm">
              <button
                onClick={() => setSelectedSpot(null)}
                className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
              >
                <span>←</span>
                <span>{selectedSpot.name}</span>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {getAllMessages(selectedSpot).map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`${msg.user === '나' ? 'ml-auto' : ''} max-w-[75%]`}
                >
                  <div className={`
                    rounded-lg p-3 backdrop-blur-sm
                    ${msg.user === '나' 
                      ? 'bg-red-900/40 border border-red-800/50 ml-auto' 
                      : msg.isGhost 
                        ? 'bg-purple-950/40 border border-purple-800/50 shadow-lg shadow-purple-900/30' 
                        : 'bg-gray-800/40 border border-gray-700/50'
                    }
                  `}>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className={`text-xs ${
                        msg.user === '나' 
                          ? 'text-red-300' 
                          : msg.isGhost 
                            ? 'text-purple-300' 
                            : 'text-gray-400'
                      }`}>
                        {msg.user}
                      </span>
                      <span className="text-[10px] text-gray-500">
                        {formatTime(msg.timestamp)}
                      </span>
                    </div>
                    <p className={`text-sm ${
                      msg.isGhost 
                        ? 'text-purple-200' 
                        : 'text-gray-200'
                    }`}>
                      {msg.message}
                    </p>
                  </div>
                  
                  {/* Glitch effect for ghost messages */}
                  {msg.isGhost && (
                    <motion.div
                      animate={{
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 5
                      }}
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.1), transparent)',
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="px-4 py-3 bg-red-950/30 border-t border-red-900/50 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="메시지 입력..."
                  className="flex-1 bg-black/40 border border-red-900/50 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-red-700"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!messageInput.trim()}
                  className="p-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-700 disabled:opacity-50 rounded-lg transition-colors"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}