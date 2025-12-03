// 배경 이미지 (Background images)
import bgScene1 from 'figma:asset/71740fad412fad17f4c0fc11d036fc1510958829.png';
import bgScene2 from 'figma:asset/32f3f4fbd836dc4aa42aabc7b9c999f7f4863d2c.png';
import bgScene3 from 'figma:asset/d29614c3004fefe092223a899a2ba07e391452a3.png';
import bgScene4 from 'figma:asset/12eea338624d6eb80ab7d018d09e2a9369e1e697.png';
import bgScene5 from 'figma:asset/5c5b611964aa2b1847668b24e3a90e76b8b52af0.png';
import bgScene6 from 'figma:asset/b56812d3df8fab9f64561deff5002dfc3d157365.png';

// 촬영 이미지 (Captured images with ghosts)
import capturedScene1 from 'figma:asset/18a3f0ec8064cf4f01a0d4a50ab0cf70865db740.png';
import capturedScene2 from 'figma:asset/bb4bdd1aba6080fd2df1e0febb1f4c7c3b85a87d.png';
import capturedScene3 from 'figma:asset/a831feee00ee3a4483a6e7ba6b1771cf631e3a15.png';
import capturedScene4 from 'figma:asset/7cb14a6a92fa130efd969a88aa08397351b9e6aa.png';
import capturedScene5 from 'figma:asset/a64da18d7b34c166065a70f3033623479ef643a1.png';
import capturedScene6 from 'figma:asset/a5db28b72565f469df1ab214093f889cb2342f38.png';

export interface SceneData {
  id: number;
  name: string;
  backgroundImage: string;
  capturedImage: string;
  ghostType: 'woman' | 'screaming-woman' | 'twins' | 'gate' | 'grad-student' | 'scientist';
  ghostPosition: { x: number; y: number };
  location: string;
  storyTitle: string;
  storyContent: string;
  curseIncrease: number;
  isHidden?: boolean;
  requiredCurseLevel?: number;
}

export const scenes: SceneData[] = [
  {
    id: 1,
    name: '건물 입구',
    backgroundImage: bgScene1,
    capturedImage: capturedScene1,
    ghostType: 'woman',
    ghostPosition: { x: 20, y: 70 }, // 왼쪽 하단 - 계단 앞 (왼쪽 50, 하단 50)
    location: '기숙사 로비',
    storyTitle: '처녀귀신 - 첫 번째 목격',
    storyContent: `20XX년 3월 15일

오늘 처음으로 그녀를 보았다.
로비 계단 앞에 서있는 창백한 여인.
긴 검은 머리카락으로 얼굴을 가리고.

나를 보며... 웃고 있었다.

"왜... 날 깨웠어..."

그녀는 30년 전 이 기숙사에서 
약혼자를 기다리다 홀로 죽음을 맞이한 
젊은 여성이라고 한다.

약속된 날, 그는 오지 않았다.
그녀는 로비에서 기다렸다.
하루, 이틀, 일주일...

결국 그녀는 이 자리에서 쓰러졌고,
아무도 그녀를 기억하지 않았다.

그래서... 아직도 기다리고 있는 걸까?
누군가 자신을 봐주기를, 
기억해주기를...`,
    curseIncrease: 12
  },
  {
    id: 2,
    name: '버려진 건물',
    backgroundImage: bgScene2,
    capturedImage: capturedScene2,
    ghostType: 'screaming-woman',
    ghostPosition: { x: 5, y: 60 }, // 왼쪽 하단 - 옥상 난간 (왼쪽 50 추가)
    location: '폐건물 옥상',
    storyTitle: '비명 - 두 번째 목격',
    storyContent: `20XX년 3월 18일

비명소리가 들린다.
귀를 찢을 듯한... 여자의 비명.

건물 가장자리에 그녀가 서있다.
입을 크게 벌린 채.
끊임없이 비명을 지르고 있다.

하지만 소리는... 내 머릿속에서만 들린다.

10년 전 이 건물에서,
한 여성이 추락했다고 한다.
자발적이었는지, 사고였는지
아무도 모른다.

그녀가 마지막으로 남긴 것은
비명뿐이었다.

그 비명이 아직도...
이곳에 메아리치고 있다.

귀가 아프다.
머리가 아프다.
하지만 그녀의 고통에 비하면...

저주 게이지 30%.
돌아갈 수 없는 선을 넘었다.`,
    curseIncrease: 18
  },
  {
    id: 3,
    name: '숲길',
    backgroundImage: bgScene3,
    capturedImage: capturedScene3,
    ghostType: 'twins',
    ghostPosition: { x: 5, y: 45 }, // 왼쪽 가운데 - 나무 앞 (왼쪽 100, 상단 50)
    location: '어두운 오솔길',
    storyTitle: '쌍둥이 - 세 번째 목격',
    storyContent: `20XX년 3월 22일

나무 사이로 두 아이가 보인다.
쌍둥이 소녀들.
똑같은 얼굴, 똑같은 옷.

손을 잡고 서있다.
나를 바라보며 웃고 있다.

"같이... 놀자..."
"우리랑... 있자..."

20년 전 이 숲에서,
쌍둥이 자매가 실종되었다고 한다.
소풍을 나왔다가 길을 잃었다고.

일주일 후 발견되었을 때,
둘은 나무 아래서 손을 꼭 잡고 있었다.
끝까지 함께였다.

그들은 아직도 친구를 찾고 있다.
함께 놀아줄 누군가를.
함께 있어줄 누군가를.

하지만... 그들과 함께하면
돌아올 수 없다고 한다.

저주 게이지 50%.
경고등이 깜박인다.`,
    curseIncrease: 20
  },
  {
    id: 4,
    name: '야외 조형물',
    backgroundImage: bgScene4,
    capturedImage: capturedScene4,
    ghostType: 'gate',
    ghostPosition: { x: 30, y: 50 }, // 정중앙 - 조형물/귀문 위치 (왼쪽으로 200px 이동)
    location: '캠퍼스 중앙 귀문',
    storyTitle: '귀문 - 네 번째 목격',
    storyContent: `20XX년 3월 28일

조형물이... 아니었다.

이곳은 문이다.
저승과 이승을 잇는 통로.
귀신들이 드나드는 관문.

주변 공기가 일그러진다.
시공간이 뒤틀리는 듯한 느낌.

수많은 형상들이 보인다.
들어가는 것, 나오는 것.
형체 없는 존재들이 끊임없이 오간다.

이 캠퍼스가 세워진 자리는
옛날부터 '귀신이 드나드는 땅'이라 
불렸다고 한다.

설계자는 몰랐을까?
아니면... 알고도 지었을까?

문 주변에 무언가 적혀있다.
피로 쓴 듯한 글씨들.

"들어가지 마라"
"열지 마라"  
"보지 마라"

하지만 이미 늦었다.
문은 이미 열렸다.
내가 영안을 활성화한 순간부터.

저주 게이지 70%.
주변에 차가운 손길이 느껴진다.`,
    curseIncrease: 20
  },
  {
    id: 5,
    name: '연구동 복도',
    backgroundImage: bgScene5,
    capturedImage: capturedScene5,
    ghostType: 'grad-student',
    ghostPosition: { x: 31, y: 22 }, // 가운데에서 약간 왼쪽, 약간 상단 - 복도 중간 (왼쪽 10 추가)
    location: '밝은 복도',
    storyTitle: '대학원생 - 다섯 번째 목격',
    storyContent: `20XX년 4월 1일

복도에 여학생이 서있다.
낡은 실험복을 입은.
노트북을 든 채로.

밝은 낮인데... 보인다.
이전엔 어둠 속에서만 나타났는데.

그녀는 걸어간다.
복도를 따라, 천천히.
끝도 없이 걷고 있다.

"끝내야... 해..."
"졸업... 해야 해..."

5년 전 이 복도에서,
한 대학원생이 쓰러져 있었다고 한다.
과로사였다.

논문을 끝내지 못했다고.
데이터가 나오지 않았다고.
교수는 더 많은 실험을 요구했다고.

밤낮없이 일했다.
쉬지 않고, 먹지도 않고.
결국 복도에서 쓰러졌다.

그녀는 아직도 실험 중이다.
끝나지 않은 논문을 위해.
얻지 못한 학위를 위해.

저주 게이지 85%.

스마트폰이 뜨겁다.
화면이 깜박인다.
무언가 깨어나고 있다.

"...211호..."
누군가 속삭인다.
"...그곳에... 가지 마..."`,
    curseIncrease: 15
  },
  {
    id: 6,
    name: '연구실',
    backgroundImage: bgScene6,
    capturedImage: capturedScene6,
    ghostType: 'scientist',
    ghostPosition: { x: 25, y: 40 }, // 가운데 - 연구실 중앙 (왼쪽 50, 하단 50 추가)
    location: '211호 연구실',
    storyTitle: '연구원의 망령 - 최후의 목격',
    storyContent: `20XX년 4월 5일

저주 게이지가 100%를 넘었다.
경고음이 끊임없이 울린다.

하지만 211호 문이 열렸다.
혼자서.

들어갈 수밖에 없다.
끌려들어간다.

연구실 안, 그가 있다.
흰 가운의 연구원.
현재 교수가 오기 전,
이곳의 주인이었던 자.

그는 연구에 미쳐있었다고 한다.
불멸의 연구.
죽음을 극복하는 실험.

결국 자신의 실험 대상이 되었다.
성공했을까? 실패했을까?

그는 아직도 여기 있다.
15년이 지났지만.
연구는 끝나지 않았다.

"성공했다..."
그가 웃는다.
"불멸을... 얻었다..."

"이제... 네 차례다..."

스마트폰 화면이 금이 간다.
그가 화면 안에서 손을 뻗는다.
유리가 깨지는 소리.

더 이상 영안이 필요 없다.
그들은 이제...
현실로 나올 수 있다.

[시스템 오류]
[저주 포화 상태]
[실체화 진행 중]

끝이다.
아니... 시작이다.`,
    curseIncrease: 30,
    isHidden: true,
    requiredCurseLevel: 85
  }
];