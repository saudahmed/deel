import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { useParams } from "react-router-dom";
import { initialPayslips } from "../../constants/data";
import { formatDate } from "../../utils";

const PayslipDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const payslip = initialPayslips.find((p) => p.id === id);
  if (!payslip) {
    return null;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Payslip {id}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            alt=""
            src={payslip.file}
            style={{ height: "50vh", objectFit: "cover" }}
          />
        </div>

        <IonList style={{ marginTop: 16 }}>
          <IonItem>
            <IonLabel color={"primary"}>ID: {id}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel color={"primary"}>
              From {formatDate(payslip.fromDate)} to{" "}
              {formatDate(payslip.toDate)}
            </IonLabel>
          </IonItem>
          <IonButton expand="full" onClick={() => {}}>
            Download
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PayslipDetail;
