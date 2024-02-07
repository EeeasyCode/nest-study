import { Test } from '@nestjs/testing';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('hello', () => {
    it('returns a default message', () => {
      jest.spyOn(appService, 'getHello').mockReturnValue('Hey~');
      expect(appController.hello()).toEqual({ message: 'Hey~' });
      expect(appService.getHello).toHaveBeenCalledTimes(1);
      expect(appService.getHello).toHaveBeenCalledWith('World');
    });

    it('returns a personalized message', () => {
      jest.spyOn(appService, 'getHello').mockReturnValue('Hey, John~');
      expect(appController.hello('John')).toEqual({ message: 'Hey, John~' });
      expect(appService.getHello).toHaveBeenCalledTimes(1);
      expect(appService.getHello).toHaveBeenCalledWith('John');
    });
  });
});
