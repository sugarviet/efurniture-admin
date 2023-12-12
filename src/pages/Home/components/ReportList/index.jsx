import { Col, Row, Card } from "antd";
import styles from "./ReportList.module.css";

import {
  AndroidOutlined,
  AppleOutlined,
  WindowsOutlined,
  BugOutlined,
} from "@ant-design/icons";

const iconMapping = {
  AndroidOutlined,
  AppleOutlined,
  WindowsOutlined,
  BugOutlined,
};

const REPORT_LIST = [
    {
      id: 1,
      icon: "AndroidOutlined",
      quantity: "714K",
      description: "Weekly Sales",
      classNameCard: "cardWeekySale",
      classNameContent: "contentWeeklySale",
    },
    {
      id: 2,
      icon: "AppleOutlined",
      quantity: "1.35m",
      description: "New Users",
      classNameCard: "cardNewUser",
      classNameContent: "contentNewUser",
    },
    {
      id: 3,
      icon: "WindowsOutlined",
      quantity: "1.72m",
      description: "Item Orders",
      classNameCard: "cardItemOrder",
      classNameContent: "itemOrderContent",
    },
    {
      id: 4,
      icon: "BugOutlined",
      quantity: "234",
      description: "Bug Reports",
      classNameCard: "cardBugReports",
      classNameContent: "bugContent",
    },
  ];

const ReportList = () => {
//   const { REPORT_LIST } = useReportList();
  return (
    <Row gutter={[16, 16]}>
      {REPORT_LIST.map((item) => {
        const IconComponent = iconMapping[item.icon];
        return (
          <Col span={6} key={item.id}>
            <Card
              className={`${styles.cardItem} ${styles[item.classNameCard]}`}
            >
              <div>
                <div
                  className={`${styles.weeklySales} ${
                    styles[item.classNameContent]
                  }`}
                >
                  <IconComponent className={styles["icon"]} />
                </div>
                <div>
                  <h3 className={styles.quantityReport}>{item.quantity}</h3>
                  <h6 className={styles.titleReport}>{item.description}</h6>
                </div>
              </div>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ReportList;