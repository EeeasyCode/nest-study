import { UsersController } from '@/modules/users/controllers/users.controller';
import { JoinUserDto } from '@/modules/users/dtos/join-user.dto';
import { UsersService } from '@/modules/users/services/users.service';
import { Test, TestingModule } from '@nestjs/testing';

const mockUserService = {
  joinUser: jest.fn()
};

const joinUserDto: JoinUserDto = {
  userEmail: 'hi@gmail.com',
  password: 'qwer1234'
};

describe('usersController', () => {
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

  it('to bo defined', async () => {
    expect(usersController).toBeDefined();
    expect(usersService).toBeDefined();
  });

  describe('join user', () => {});
});
