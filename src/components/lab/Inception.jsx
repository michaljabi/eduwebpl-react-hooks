export function Inception() {
  console.log("🛏️ %cInception", `color: teal`, "fired")
  return (
    <div>
      <FirstDream />
    </div>
  )
}

function FirstDream() {
  console.log("1️⃣ %cFirstDream", `color: teal`, "fired")
  return <SecondDream />
}

function SecondDream() {
  console.log("2️⃣ %cSecondDream", `color: teal`, "fired")
  return <ThirdDream />
}

function ThirdDream() {
  console.log("3️⃣ %cThirdDream", `color: teal`, "fired")
  return <span className="m-3"> Wake up !</span>
}
