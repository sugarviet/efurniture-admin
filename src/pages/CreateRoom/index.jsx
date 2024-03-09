import RoomForm from "../Rooms/components/RoomForm";

function CreateRoom() {
  return (
    <main className="flex flex-col shadow-xl rounded-xl bg-white p-4">
      <span className="tracking-wider text-xl font-semibold mb-4">
        Create New Room
      </span>
      <RoomForm />
    </main>
  );
}

export default CreateRoom;
