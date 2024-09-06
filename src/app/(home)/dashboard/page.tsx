import InventoryCard from "../components/InventoryCard";

export default function Page() {
    return (
      <>
        <p>Dashboard</p>
        <hr />
        <h1>Inventory Summary</h1>
        <div className='flex gap-4 justify-between flex-wrap'>
          <InventoryCard type="items"/>
          <InventoryCard type="total quantity" />
          <InventoryCard type="total value" />
        </div>
      </>
    )
  }