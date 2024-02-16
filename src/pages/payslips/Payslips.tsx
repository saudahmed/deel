import { useState, useMemo } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonLabel,
  IonListHeader,
} from "@ionic/react";
import { IPaySlip } from "../../types";
import { initialPayslips } from "../../constants/data";
import PayslipItem from "../../components/payslipItem/PayslipItem";

const Payslips: React.FC = () => {
  const [payslips] = useState(initialPayslips);

  // Group payslips by year
  const payslipsByYear = useMemo(() => {
    return payslips.reduce(
      (groups, payslip) => {
        const year = new Date(payslip.fromDate).getFullYear();
        if (!groups[year]) {
          groups[year] = [];
        }
        groups[year].push(payslip);
        return groups;
      },
      {} as Record<string, IPaySlip[]>,
    );
  }, [payslips]);

  const sortedYears = useMemo(
    () => Object.keys(payslipsByYear).sort((a, b) => Number(b) - Number(a)),
    [payslipsByYear],
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Payslips</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Payslips</IonTitle>
          </IonToolbar>
        </IonHeader>
        {sortedYears.map((year) => (
          <div key={year}>
            <IonListHeader>
              <IonLabel>
                <h1 style={{ fontWeight: "medium" }}>{year}</h1>
              </IonLabel>
            </IonListHeader>
            <IonList>
              {payslipsByYear[year].map((payslip) => (
                <PayslipItem payslip={payslip} />
              ))}
            </IonList>
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Payslips;
