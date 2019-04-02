import {IToastProps, Position, Toaster} from '@blueprintjs/core';

const SEND_PRIMARY_NOTIFICATION = 'Notifier.SEND_PRIMARY_NOTIFICATION';
const SEND_SECONDARY_NOTIFICATION = 'Notifier.SEND_SECONDARY_NOTIFICATION';

const primaryToaster = Toaster.create({
    className: 'loader-toast',
    position: Position.BOTTOM
});

const notificationToaster = Toaster.create({
    className: 'notification-toast',
    position: Position.TOP_RIGHT
});

const showPrimaryNotification = function (notification: IToastProps) {
    return {
        type: SEND_PRIMARY_NOTIFICATION,
        toastId: primaryToaster.show(notification)
    }
};

const showSecondaryNotification = function (notification: IToastProps) {
    return {
        type: SEND_SECONDARY_NOTIFICATION,
        toastId: notificationToaster.show(notification)
    }
};

// Reducer
export default function Notifier(state = {} as IToastProps, isPrimary: boolean) {
    if(isPrimary === true) {
        return showPrimaryNotification(state);
    } else if(isPrimary === false) {
        return showSecondaryNotification(state);
    } else {
        return state;
    }
}