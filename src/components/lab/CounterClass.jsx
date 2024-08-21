import { Component } from "react"
import { Button } from "../ui/Button.jsx"
import { MinusIcon, PlusIcon } from "lucide-react"

export class CounterClass extends Component {
  state = {
    count: 10,
  }

  addTwo = () => {
    this.setState({ count: this.state.count + 2 })
  }

  render() {
    const { count } = this.state

    return (
      <div className="rounded p-6 border border-slate-400 text-center relative">
        <span className="text-deep-purple-300 border border-deep-purple-500 rounded-full px-2 text-sm absolute right-2 top-2">
          class Component
        </span>
        <div className="m-6 p-3 text-2xl bg-gray-200 dark:bg-slate-800 rounded w-1/2 mx-auto">
          {count}
        </div>
        <Button
          className="m-2"
          as="secondary"
          onClick={() => this.setState({ count: count - 1 })}
        >
          <MinusIcon color="red" /> minus
        </Button>
        <Button onClick={() => this.setState({ count: count + 1 })}>
          <PlusIcon color="lightgreen" /> plus
        </Button>
        <Button as="secondary" onClick={this.addTwo}>
          <PlusIcon color="lightgreen" /> +2
        </Button>
      </div>
    )
  }
}
