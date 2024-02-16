import { useCallback } from "react";
import { IonItem, IonLabel, IonThumbnail } from "@ionic/react";
import { IPaySlip } from "../../types";
import { useHistory } from "react-router-dom";
import { formatDate } from "../../utils";

const PayslipItem: React.FC<{ payslip: IPaySlip }> = ({ payslip }) => {
  const history = useHistory();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      history.push(`/payslips/${payslip.id}`);
    },
    [history, payslip.id],
  );

  return (
    <IonItem button onClick={handleClick}>
      <IonThumbnail slot="start">
        <img alt="" src={payslip.file} />
      </IonThumbnail>
      <IonLabel color={"primary"}>
        From {formatDate(payslip.fromDate)} to {formatDate(payslip.toDate)}
      </IonLabel>
    </IonItem>
  );
};

export default PayslipItem;
