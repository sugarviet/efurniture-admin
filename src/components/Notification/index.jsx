import NotificationCard from "../NotificationCard";
import NotificationList from "../NotificationList";

function Notification() {
  return (
    <section className="flex flex-col px-4">
      <span className="font-semibold text-md text-black mb-2">
        Notification
      </span>
      {/* <ul>
        <li className="mb-5">
          <NotificationCard />
        </li>
        <li className="mb-5">
          <NotificationCard />
        </li>
      </ul> */}
      <NotificationList />
    </section>
  );
}

export default Notification;
