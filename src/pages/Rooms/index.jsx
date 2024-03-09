import { Button } from "antd";
import { useState, lazy } from "react";
import AppModal from "@components/AppModal";
import AppSuspense from "@components/AppSuspense";
import RoomTable from "../../components/RoomTable";
import { withFetchData } from "../../hocs/withFetchData";
import {
  get_draft_rooms_api,
  get_published_rooms_api,
} from "../../api/roomApi";
import TableCard from "../../components/TableCard";

const CreatingRooms = lazy(() => import("./components/RoomForm"));

const PublicRoomTable = withFetchData(RoomTable, get_published_rooms_api);
const DraftRoomTable = withFetchData(RoomTable, get_draft_rooms_api);

const Rooms = () => {
  return (
    <main>
      <TableCard label={"Public Rooms"}>
        <PublicRoomTable />
      </TableCard>

      <TableCard label={"Draft Rooms"}>
        <DraftRoomTable />
      </TableCard>
    </main>
  );
};

export default Rooms;
