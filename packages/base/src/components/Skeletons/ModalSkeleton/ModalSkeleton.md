```tsx
import { Modal } from '../../Modal';
import { ModalSkeleton } from '../../ModalSkeletons';

<Modal.Container>
      <Modal.Body>
          {isLoading ? (
            <ModalListSkeleton type='white-reason' />
          ) : (
            //...
          )}
      </Modal.Body>
    </Modal.Container>
```