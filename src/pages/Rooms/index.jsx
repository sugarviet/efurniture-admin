import { Button } from "antd";
import { useState, lazy } from "react";
import AppModal from "@components/AppModal";
import AppSuspense from "@components/AppSuspense";
import RoomTable from "../../components/RoomTable";

const CreatingRooms = lazy(() => import("./components/CreatingRooms"));

const Rooms = () => {
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);

  return (
    <main>
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl">Rooms management</h1>
        <Button type="primary" onClick={() => setIsModalCreateOpen(true)}>
          Create Rooms
        </Button>
      </div>

      <RoomTable />

      <AppModal isOpen={isModalCreateOpen} setIsOpen={setIsModalCreateOpen}>
        <AppSuspense>
          <CreatingRooms setIsOpen={setIsModalCreateOpen} />
        </AppSuspense>
      </AppModal>
    </main>
  );
};

export default Rooms;
