import React from 'react';
import { Position, Toaster } from "@blueprintjs/core";

export const LoaderToast = Toaster.create({
    className: "loader-toast",
    position: Position.BOTTOM,
});