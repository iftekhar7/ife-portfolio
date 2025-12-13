export default function Stepper({ step, steps }: { steps: any; step: number }) {
  return (
    <div className="stepper">
      {steps.map((s: any, idx: number) => (
        <div className="stepper-item" key={s.number}> 
          <div
            className={
              step > s.number
                ? "step-circle completed"
                : step === s.number
                ? "step-circle active"
                : "step-circle"
            }
          >
            {step > s.number ? <i className="fas fa-check" /> : s.number}
          </div>
 
          <span
            className={
              step >= s.number ? "step-title active-title" : "step-title"
            }
          >
            {s.title}
          </span>
 
          {idx < steps.length - 1 && (
            <div
              className={
                step > s.number ? "step-line completed-line" : "step-line"
              }
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
