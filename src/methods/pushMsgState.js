import emitter from '@/methods/emitter';

const pushMsgState = function (res, title = '更新') {
  if (res.data.success) {
    emitter.emit('push-msg', {
      style: 'success',
      title: `${title}成功`,
      content: res.content,
    });
  } else {
    const msg = typeof res.data.message === 'string' ? [res.data.message] : res.data.message;
    emitter.emit('push-msg', {
      style: 'danger',
      title: `${title}失敗`,
      content: msg.join('、'),
    });
  }
};
export default pushMsgState;
