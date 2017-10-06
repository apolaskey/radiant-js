import {Position, Toaster} from '@blueprintjs/core';
import {Intent} from '@blueprintjs/core/dist/common/intent';

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

const firePrimaryNotifcation = function (notification) {
    return primaryToaster.show(notification);
};

const fireSecondaryNotification = function (notification) {
    return notificationToaster.show(notification);
};

export const fireNotification = function(message, isPriority = false) {
    if(isPriority) {
        return {
            type: SEND_PRIMARY_NOTIFICATION,
            notification: message
        }
    } else {
        return {
            type: SEND_SECONDARY_NOTIFICATION,
            notification: message
        }
    }
};

export default function Notifier(state = {}, action) {
    switch(action.type) {
        case SEND_PRIMARY_NOTIFICATION:
            return firePrimaryNotifcation(action.notification);
        case SEND_SECONDARY_NOTIFICATION:
            return fireSecondaryNotification(action.notification);
        default:
            return state;
    }
}