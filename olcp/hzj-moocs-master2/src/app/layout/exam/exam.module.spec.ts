import { ExamModule } from './exam.module';

describe('ExamModule', () => {
  let examModule: ExamModule;

  beforeEach(() => {
    examModule = new ExamModule();
  });

  it('should create an instance', () => {
    expect(examModule).toBeTruthy();
  });
});
