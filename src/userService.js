// src/userService.js
import { db } from "./firebaseConfig";
import { doc, getDoc, setDoc, updateDoc, increment, arrayUnion } from "firebase/firestore";

/** Создать документ пользователя, если его нет */
export async function ensureUserDoc(uid, email) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      email: email || "",
      keys: 0,
      purchases: [],
      createdAt: Date.now(),
    });
  }
  return ref;
}

/** Получить данные пользователя */
export async function getUserData(uid) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

/** Начислить ключи */
export async function addKeys(uid, count = 1) {
  const ref = doc(db, "users", uid);
  await updateDoc(ref, { keys: increment(count) });
}

/** Добавить запись о покупке */
export async function addPurchase(uid, sku) {
  const ref = doc(db, "users", uid);
  await updateDoc(ref, { purchases: arrayUnion(sku) });
}
