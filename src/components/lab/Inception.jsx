import { memo } from "react"
import PropTypes from "prop-types"

export const Inception = memo(LocalInception)

LocalInception.propTypes = {
  isShown: PropTypes.bool,
}

export function LocalInception({ isShown = false }) {
  console.log("🛏️ %cInception", `color: teal`, "fired", isShown)
  return (
    <div>
      <FirstDream />
    </div>
  )
}

const FirstDream = memo(function FirstDream() {
  console.log("1️⃣ %cFirstDream", `color: teal`, "fired")
  return <SecondDream />
})

function SecondDream() {
  console.log("2️⃣ %cSecondDream", `color: teal`, "fired")
  return <ThirdDream />
}

function ThirdDream() {
  console.log("3️⃣ %cThirdDream", `color: teal`, "fired")
  return <span className="m-3"> Wake up !</span>
}
