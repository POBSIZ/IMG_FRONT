import { testSaga } from './test';
import { toastSaga } from './toast';
import { quizSaga } from './quiz';
import { authSaga } from './auth';

const Sagas = [testSaga(), toastSaga(), quizSaga(), authSaga()];

export default Sagas;
