import Header from "@/components/header";
import Image from "next/image";

interface Profile {
  imageSrc: string;
  name: string;
  age: number;
  nationality: string;
  height: number;
  weight: number;
  job: string;
  famousLines: string[];
}

export default function Assignment2() {
  // 이 아래에 ProfileCard 컴포넌트 사용에 필요한 오브젝트(데이터)를 만들어 주세요.
  const 사람 = {
    imageSrc: "",
    name: "마석도",
    age: 45,
    nationality: "한국",
    height: 179,
    weight: 120,
    job: "직업",
    famousLines: ["응 아직 솔로야"],
  };
  const 프로필 = (
    <ProfileCard
      imageSrc={사람.imageSrc}
      name={사람.name}
      age={사람.age}
      nationality={사람.nationality}
      height={사람.height}
      weight={사람.weight}
      job={사람.job}
      famousLines={사람.famousLines}
    ></ProfileCard>
  );
  return (
    <>
      <Header title={"프로필 카드 만들기"} hasBack={true} />
      <div className="w-full h-full flex flex-col overflow-y-auto py-5 px-5 gap-5">
        {/* 이 아래에 ProfileCard 컴포넌트를 사용하는 코드를 작성해 주세요. */}
        {프로필}
      </div>
    </>
  );
}

function ProfileCard(props: Profile) {
  return (
    <div className="p-5 bg-white border rounded-md mx-16">
      <div className="w-full flex justify-center pb-5">
        <Image
          className="rounded-full size-40"
          src={props.imageSrc}
          width={500}
          height={500}
          alt="profile"
        />
      </div>
      <div className="w-full h-full flex flex-col gap-2">
        <div>
          <p className="text-xs text-stone-400">이름</p>
          <div>{props.name}</div>
        </div>
        <div>
          <p className="text-xs text-stone-400">나이</p>
          <div>{props.age}세</div>
        </div>
        <div>
          <p className="text-xs text-stone-400">국적</p>
          <div>{props.nationality}</div>
        </div>
        <div>
          <p className="text-xs text-stone-400">키/몸무게</p>
          <div>
            {props.height}cm / {props.weight}kg
          </div>
        </div>
        <div>
          <p className="text-xs text-stone-400">직업</p>
          <div>{props.job}</div>
        </div>
        <div>
          <p className="text-xs text-stone-400">명대사</p>
          {props.famousLines.map((line, index) => (
            <div key={`${props.name}FamouseLine${index}`}>
              &quot;{line}&quot;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
