import PropTypes from "prop-types"
import { Button } from "../ui/Button.jsx"
import { Input } from "../ui/Input.jsx"
import { CalendarIcon, DollarSignIcon } from "lucide-react"

MakeExchangeModalDialog.propTypes = {
  dialogId: PropTypes.string,
  onConfirm: PropTypes.func,
}

export function MakeExchangeModalDialog({
  dialogId = "",
  onConfirm = () => {},
}) {
  return (
    <dialog
      id={dialogId}
      className="dark:bg-slate-800 bg-gray-50 lg:mx-auto lg:w-1/2 rounded border border-gray-500 dark:border-slate-900 shadow-xl backdrop:backdrop-blur-sm"
    >
      <form className="dark:text-slate-100" method="dialog">
        <h3 className="text-xl font-bold mb-2 p-3 pl-6 dark:text-slate-300 dark:bg-slate-700 bg-deep-purple-100">
          Start new exchange party
        </h3>
        <div className="shadow-lg px-10 py-5 ">
          <Input
            name="name"
            label="Party name"
            placeholder="name of the Exchange"
            value={"example"}
          />
          <Input
            name="budget"
            label="Gift budget"
            type="number"
            icon={<DollarSignIcon size={18} />}
          />
          <Input
            name="date"
            label="Exchange date"
            type="datetime-local"
            icon={<CalendarIcon size={18} />}
          />
          <div className="flex items-center justify-end mt-4">
            <Button as="secondary" type="submit">
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={() =>
                onConfirm({
                  partyName: "TO-DO",
                  giftBudget: 10,
                  exchangeDate: "2024-12-01T10:00:00Z",
                })
              }
            >
              Make new exchange
            </Button>
          </div>
        </div>
      </form>
    </dialog>
  )
}
