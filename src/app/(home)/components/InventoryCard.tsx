const InventoryCard = ({ type }: {type: string}) => {
    return (
        <div className="rounded-2xl bg-white p-4 flex-1">
            <h1 className="text-2xl font-semibold my-4">1,200</h1>
            <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
        </div>
    )
}

export default InventoryCard