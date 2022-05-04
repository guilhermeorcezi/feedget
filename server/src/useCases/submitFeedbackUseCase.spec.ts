import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy },
)

describe('Submit feedback', () => {
  it('shoud be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'comment test',
      screenshot: 'data:image/png;base64test.jpg',
    })).resolves.not.toThrow();
  
    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  })
})

describe('Submit feedback', () => {
  it('shoud not be able to submit a feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'comment test',
      screenshot: 'data:image/png;base64test.jpg',
    })).rejects.toThrow();
  })
})

describe('Submit feedback', () => {
  it('shoud not be able to submit a feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64test.jpg',
    })).rejects.toThrow();
  })
})

describe('Submit feedback', () => {
  it('shoud not be able to submit a feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'test comment',
      screenshot: 'invalid',
    })).rejects.toThrow();
  })
})