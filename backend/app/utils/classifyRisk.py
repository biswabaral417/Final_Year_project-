function classifyRisk(probability) {
  const percent = probability * 100;

  if (percent <= 30) return { label: "Healthy", color: "green" };
  if (percent <= 50) return { label: "Low Risk", color: "blue" };
  if (percent <= 70) return { label: "Moderate Risk", color: "orange" };
  if (percent <= 85) return { label: "High Risk", color: "red" };
  return { label: "Very High Risk", color: "darkred" };
}
