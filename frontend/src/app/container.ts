import { LocalStorageStudyRepository } from '../data/repositories/LocalStorageStudyRepository';

export interface AppContainer {
  studies: LocalStorageStudyRepository;
}

export const createContainer = (): AppContainer => {
  const studies = new LocalStorageStudyRepository();
  return { studies };
};
