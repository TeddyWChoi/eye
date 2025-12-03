import svgPaths from "./svg-tzvqemgqqw";
import imgImage4 from "figma:asset/96e8be3d3cb3ea64165495c92315b413332e2337.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[23.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M11.9969 6.99821V20.9946" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99949" />
          <path d={svgPaths.p11cb1e80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99949" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">커뮤니티</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">귀신스팟을 찾아라</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[43.984px] relative shrink-0 w-[116.528px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[43.984px] items-start relative w-[116.528px]">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[43.984px] relative shrink-0 w-[152.519px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11.997px] h-[43.984px] items-center relative w-[152.519px]">
        <Icon />
        <Container />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[23.994px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p14c68900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99949" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p38482c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99949" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[41.981px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.001px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-[1.001px] pt-[8.994px] px-[8.994px] relative size-[41.981px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[43.984px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Button />
    </div>
  );
}

function StoryFragments() {
  return (
    <div className="bg-white h-[76.955px] relative shrink-0 w-full" data-name="StoryFragments">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.001px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[76.955px] items-start pb-[1.001px] pt-[15.985px] px-[15.985px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[18.019px] left-[174.81px] top-[2px] w-[29.64px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[15px] not-italic text-[16px] text-black text-center top-[-3px] tracking-[-0.3125px] translate-x-[-50%] w-[30px]">1 / 5</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[126.97px] not-italic text-[16px] text-black text-center text-nowrap top-[-1px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">해제된 스토리:</p>
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[18.019px] left-[176.12px] top-[2px] w-[31.189px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[16px] text-black text-center top-[-3px] tracking-[-0.3125px] translate-x-[-50%] w-[32px]">15%</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[126.1px] not-italic text-[16px] text-black text-center text-nowrap top-[-1px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">현재 저주 수치:</p>
      <Text1 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[19.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[142.18px] not-italic text-[#4a5565] text-[14px] text-center text-nowrap top-0 tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">모든 장소를 탐험하고 진실을 밝혀내십시오...</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[7.993px] h-[133.953px] items-start left-[23.99px] pb-[1.001px] pt-[24.995px] px-[24.995px] top-[1855.53px] w-[333.411px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.001px] border-black border-solid inset-0 pointer-events-none" />
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[31.987px] relative shrink-0 w-[24.025px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.987px] relative w-[24.025px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-[-1px] tracking-[0.0703px] whitespace-pre">📖</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">그림자 - 두 번째 목격</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[15.985px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">어두운 복도 - 사진 촬영 필요</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 grow h-[43.968px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.989px] h-[43.968px] items-start relative w-full">
        <Heading1 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[43.968px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[11.997px] h-[43.968px] items-start relative w-full">
          <Text2 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[125.71px] size-[31.987px] top-[32.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p23aec00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66555" />
          <path d={svgPaths.p1bcd2a00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66555" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[19.99px] left-[32.99px] top-[72.97px] w-[217.446px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[109.19px] not-italic text-[#4a5565] text-[14px] text-center top-0 tracking-[-0.1504px] translate-x-[-50%] w-[206px]">복도에서 귀신을 촬영하여 해제하세요</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-gray-100 h-[125.944px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.001px] border-solid inset-0 pointer-events-none" />
      <Icon2 />
      <Paragraph5 />
    </div>
  );
}

function StoryFragments1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[15.986px] h-[233.885px] items-start left-px pb-0 pt-[23.994px] px-[23.994px] top-px w-[331.409px]" data-name="StoryFragments">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[15.985px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-9.09%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 9">
            <path d={svgPaths.p1111f200} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33212" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_29.17%_54.17%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p22eb0180} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33212" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StoryFragments2() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex flex-col items-start left-[282.45px] pb-[1.001px] pt-[8.994px] px-[8.994px] size-[33.973px] top-[16.99px]" data-name="StoryFragments">
      <div aria-hidden="true" className="absolute border-[1.001px] border-black border-solid inset-0 pointer-events-none" />
      <Icon3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white h-[235.887px] left-[23.99px] top-[816.01px] w-[333.411px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.001px] border-black border-solid inset-0 pointer-events-none" />
      <StoryFragments1 />
      <StoryFragments2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[31.987px] relative shrink-0 w-[24.025px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.987px] relative w-[24.025px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-[-1px] tracking-[0.0703px] whitespace-pre">📖</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">아이 - 세 번째 목격</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[15.985px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">버려진 거실 - 사진 촬영 필요</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 grow h-[43.968px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.988px] h-[43.968px] items-start relative w-full">
        <Heading2 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[43.968px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[11.997px] h-[43.968px] items-start relative w-full">
          <Text3 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[125.71px] size-[31.987px] top-[32.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p23aec00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66555" />
          <path d={svgPaths.p1bcd2a00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66555" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[19.99px] left-[32.99px] top-[72.97px] w-[217.446px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[109.19px] not-italic text-[#4a5565] text-[14px] text-center top-0 tracking-[-0.1504px] translate-x-[-50%] w-[206px]">거실에서 귀신을 촬영하여 해제하세요</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-gray-100 h-[125.944px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.001px] border-solid inset-0 pointer-events-none" />
      <Icon4 />
      <Paragraph7 />
    </div>
  );
}

function StoryFragments3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[15.985px] h-[233.885px] items-start left-px pb-0 pt-[23.994px] px-[23.994px] top-px w-[331.409px]" data-name="StoryFragments">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[15.985px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-9.09%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 9">
            <path d={svgPaths.p1111f200} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33212" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_29.17%_54.17%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p22eb0180} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33212" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StoryFragments4() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex flex-col items-start left-[282.45px] pb-[1.001px] pt-[8.994px] px-[8.994px] size-[33.973px] top-[16.99px]" data-name="StoryFragments">
      <div aria-hidden="true" className="absolute border-[1.001px] border-black border-solid inset-0 pointer-events-none" />
      <Icon5 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white h-[235.887px] left-[23.99px] top-[1075.89px] w-[333.411px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.001px] border-black border-solid inset-0 pointer-events-none" />
      <StoryFragments3 />
      <StoryFragments4 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[31.987px] relative shrink-0 w-[24.025px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.987px] relative w-[24.025px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-[-1px] tracking-[0.0703px] whitespace-pre">📖</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">노인 - 네 번째 목격</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[15.985px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">낡은 계단 - 사진 촬영 필요</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 grow h-[43.968px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.988px] h-[43.968px] items-start relative w-full">
        <Heading3 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[43.968px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[11.997px] h-[43.968px] items-start relative w-full">
          <Text4 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[125.71px] size-[31.987px] top-[32.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p23aec00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66555" />
          <path d={svgPaths.p1bcd2a00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66555" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[19.99px] left-[32.99px] top-[72.97px] w-[217.446px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[109.19px] not-italic text-[#4a5565] text-[14px] text-center top-0 tracking-[-0.1504px] translate-x-[-50%] w-[206px]">계단에서 귀신을 촬영하여 해제하세요</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-gray-100 h-[125.944px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.001px] border-solid inset-0 pointer-events-none" />
      <Icon6 />
      <Paragraph9 />
    </div>
  );
}

function StoryFragments5() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[15.985px] h-[233.885px] items-start left-px pb-0 pt-[23.994px] px-[23.994px] top-px w-[331.409px]" data-name="StoryFragments">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[15.985px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-9.09%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 9">
            <path d={svgPaths.p1111f200} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33212" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_29.17%_54.17%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p22eb0180} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33212" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StoryFragments6() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex flex-col items-start left-[282.45px] pb-[1.001px] pt-[8.994px] px-[8.994px] size-[33.973px] top-[16.99px]" data-name="StoryFragments">
      <div aria-hidden="true" className="absolute border-[1.001px] border-black border-solid inset-0 pointer-events-none" />
      <Icon7 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-white h-[235.887px] left-[23.99px] top-[1335.77px] w-[333.411px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.001px] border-black border-solid inset-0 pointer-events-none" />
      <StoryFragments5 />
      <StoryFragments6 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[31.987px] relative shrink-0 w-[24.025px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.987px] relative w-[24.025px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-[-1px] tracking-[0.0703px] whitespace-pre">📖</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">쌍둥이 - 마지막 목격</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[15.985px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">오래된 욕실 - 사진 촬영 필요</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 grow h-[43.968px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.989px] h-[43.968px] items-start relative w-full">
        <Heading4 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[43.968px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[11.997px] h-[43.968px] items-start relative w-full">
          <Text5 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[125.71px] size-[31.987px] top-[32.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p23aec00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66555" />
          <path d={svgPaths.p1bcd2a00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66555" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[19.99px] left-[32.99px] top-[72.97px] w-[217.446px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[109.19px] not-italic text-[#4a5565] text-[14px] text-center top-0 tracking-[-0.1504px] translate-x-[-50%] w-[206px]">욕실에서 귀신을 촬영하여 해제하세요</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-gray-100 h-[125.944px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.001px] border-solid inset-0 pointer-events-none" />
      <Icon8 />
      <Paragraph11 />
    </div>
  );
}

function StoryFragments7() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[15.986px] h-[233.885px] items-start left-px pb-0 pt-[23.994px] px-[23.994px] top-px w-[331.409px]" data-name="StoryFragments">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[15.985px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-9.09%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 9">
            <path d={svgPaths.p1111f200} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33212" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_29.17%_54.17%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p22eb0180} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33212" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StoryFragments8() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex flex-col items-start left-[282.45px] pb-[1.001px] pt-[8.994px] px-[8.994px] size-[33.973px] top-[16.99px]" data-name="StoryFragments">
      <div aria-hidden="true" className="absolute border-[1.001px] border-black border-solid inset-0 pointer-events-none" />
      <Icon9 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-white h-[235.887px] left-[23.99px] top-[1595.65px] w-[333.411px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.001px] border-black border-solid inset-0 pointer-events-none" />
      <StoryFragments7 />
      <StoryFragments8 />
    </div>
  );
}

function StoryFragments9() {
  return (
    <div className="h-[2013.48px] relative shrink-0 w-full" data-name="StoryFragments">
      <Container3 />
      <Container7 />
      <Container11 />
      <Container15 />
      <Container19 />
      <div className="absolute h-[218px] left-px top-[8.04px] w-[380px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="absolute left-[102px] size-[36px] top-[81.04px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
          <circle cx="18" cy="18" fill="var(--fill-0, #FF0000)" id="Ellipse 2" r="18" />
        </svg>
      </div>
      <div className="absolute left-[205px] size-[36px] top-[81.04px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
          <circle cx="18" cy="18" fill="var(--fill-0, #FF0000)" id="Ellipse 2" r="18" />
        </svg>
      </div>
      <div className="absolute left-[66px] size-[36px] top-[148.04px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
          <circle cx="18" cy="18" fill="var(--fill-0, #FF0000)" id="Ellipse 2" r="18" />
        </svg>
      </div>
      <div className="absolute left-[294px] size-[36px] top-[112.04px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
          <circle cx="18" cy="18" fill="var(--fill-0, #FF0000)" id="Ellipse 2" r="18" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[32.674px] left-[33px] not-italic text-[20.107px] text-black text-nowrap top-[243.04px] whitespace-pre">홍문관 귀신스팟 이모저모</p>
      <div className="absolute bg-[#d9d9d9] h-[63px] left-[33px] top-[293.04px] w-[172px]" />
      <div className="absolute bg-[#d9d9d9] h-[63px] left-[33px] top-[452.04px] w-[172px]" />
      <div className="absolute bg-[#d9d9d9] h-[63px] left-[177px] top-[532.04px] w-[172px]" />
      <div className="absolute bg-[#d9d9d9] h-[63px] left-[177px] top-[372.04px] w-[172px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22.75px] left-[70px] not-italic text-[14px] text-black text-nowrap top-[313.04px] whitespace-pre">귀신 몇시에 나와</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22.75px] left-[52px] not-italic text-[14px] text-black text-nowrap top-[472.04px] whitespace-pre">{`귀신  보러 같이 갈사람?`}</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22.75px] left-[196px] not-italic text-[14px] text-black text-nowrap top-[552.04px] whitespace-pre">{`귀신  보러 같이 갈사람?`}</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22.75px] left-[249px] not-italic text-[14px] text-black text-nowrap top-[392.04px] whitespace-pre">나도 봤어</p>
    </div>
  );
}

export default function Container20() {
  return (
    <div className="bg-white relative size-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[3.003px] relative size-full">
          <StoryFragments />
          <StoryFragments9 />
          <div className="h-[218px] relative shrink-0 w-[380px]" data-name="image 4">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[3.003px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}