import { AnswerModule } from './answer.module';

describe('AnswerModule', () => {
  let answerModule: AnswerModule;

  beforeEach(() => {
    answerModule = new AnswerModule();
  });

  it('should create an instance', () => {
    expect(answerModule).toBeTruthy();
  });
});
