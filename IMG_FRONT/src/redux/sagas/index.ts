import { testSaga } from './test';
import { toastSaga } from './toast';

const Sagas = [testSaga(), toastSaga()];

export default Sagas;
