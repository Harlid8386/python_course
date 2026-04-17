import { fas1 } from "./fas1";
import { fas2 } from "./fas2";
import { fas3 } from "./fas3";

export const phases = [fas1, fas2, fas3];

export function getPhase(id) {
  return phases.find((p) => p.id === parseInt(id));
}

export function getTotalLessons() {
  return phases.reduce((sum, p) => sum + p.lessons.length, 0);
}

export function getTotalExercises() {
  return phases.reduce(
    (sum, p) => sum + p.lessons.reduce((s, l) => s + l.exercises.length, 0),
    0
  );
}
