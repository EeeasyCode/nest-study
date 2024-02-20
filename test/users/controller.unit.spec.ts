import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../../src/modules/users/controllers/users.controller';
import { UsersService } from '../../src/modules/users/services/users.service';
import { JoinUserDto } from '../../src/modules/users/dtos/join-user.dto';
import { createResponse } from 'node-mocks-http';

const mockUserService = {
  joinUser: jest.fn()
};

const joinUserDto: JoinUserDto = {
  userEmail: 'test@test.com',
  password: '12345!@fd'
};

describe('UsersController', () => {
  let usersController;
  let usersService;

  beforeEach(async () => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockUserService
        }
      ]
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  afterAll(async () => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it('to be defined', async () => {
    expect(usersController).toBeDefined();
    expect(usersService).toBeDefined();
  });

  describe('success Join User', () => {
    it('If user does not exist', async () => {
      mockUserService.joinUser.mockResolvedValue('success');

      expect(await usersController.joinUser(joinUserDto)).toBe('success join user');
    });
  });

  describe('fail Join User', () => {
    it('If already user exist', async () => {
      mockUserService.joinUser.mockResolvedValue('fail');

      expect(await usersController.joinUser(joinUserDto)).toBe('already exist user');
    });
  });
});
