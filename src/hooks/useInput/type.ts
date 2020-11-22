import React, { Dispatch, SetStateAction } from "react";

type changeTextType = (e: eventType) => void;
export type eventType = React.ChangeEvent<HTMLInputElement>;
export type ReturnTypes = [string, changeTextType, Dispatch<SetStateAction<string>>];
