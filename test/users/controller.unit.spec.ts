import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../../src/modules/users/controllers/users.controller';
import { UsersService } from '../../src/modules/users/services/users.service';
import { JoinUserDto } from '../../src/modules/users/dtos/join-user.dto';

describe('UsersController', () => {
  let controller: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService]
    }).compile();

    controller = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('joinUser', () => {
    it('should return "success join user" when user join is successful', async () => {
      const joinUserDto: JoinUserDto = {
        userEmail: 'hi@email.com',
        password: '1234'
      };
      jest.spyOn(usersService, 'joinUser').mockResolvedValueOnce('success');

      const result = await controller.joinUser(joinUserDto);

      expect(result).toBe('success join user');
    });

    it('should return "already exist user" when user already exists', async () => {
      const joinUserDto: JoinUserDto = {
        userEmail: 'hi@email.com',
        password: '1234'
      };
      jest.spyOn(usersService, 'joinUser').mockResolvedValueOnce('already exist');

      const result = await controller.joinUser(joinUserDto);

      expect(result).toBe('already exist user');
    });
  });
});
