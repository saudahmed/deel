import { useCallback } from "react";
import { IonItem, IonLabel, IonThumbnail } from "@ionic/react";
import { IPaySlip } from "../../types";
import { useHistory } from "react-router-dom";

const PayslipItem: React.FC<{ payslip: IPaySlip }> = ({ payslip }) => {
  const history = useHistory();

  const formatDate = useCallback((dateString: string) => {
    const options = { day: "numeric", month: "short" } as const;
    return new Date(dateString).toLocaleDateString(undefined, options);
  }, []);

  const handleClick = useCallback(() => {
    history.push(`/payslips/${payslip.id}`);
  }, [history, payslip.id]);

  return (
    <IonItem button onClick={handleClick}>
      <IonThumbnail slot="start">
        <img alt="" src={`./assets/${payslip.file}`} />
      </IonThumbnail>
      <IonLabel color={"primary"}>
        From {formatDate(payslip.fromDate)} to {formatDate(payslip.toDate)}
      </IonLabel>
    </IonItem>
  );
};

export default PayslipItem;
