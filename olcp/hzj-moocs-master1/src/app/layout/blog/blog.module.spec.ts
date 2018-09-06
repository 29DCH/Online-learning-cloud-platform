import { BlogModule } from './blog.module';

describe('BlogModule', () => {
  let blogModule: BlogModule;

  beforeEach(() => {
    blogModule = new BlogModule();
  });

  it('should create an instance', () => {
    expect(blogModule).toBeTruthy();
  });
});
