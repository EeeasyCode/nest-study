import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../../src/modules/users/services/users.service';
import { JoinUserDto } from '../../src/modules/users/dtos/join-user.dto';
import { UsersRepository } from '../../src/modules/users/repositories/users.repository';
import { Users } from '../../src/modules/users/entities/users.entity';

describe('UsersService', () => {
  let service: UsersService;
  let usersRepository: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersRepository,
          useValue: {
            existCheckUser: jest.fn(),
            joinUser: jest.fn()
          }
        }
      ]
    }).compile();

    service = module.get<UsersService>(UsersService);
    usersRepository = module.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('joinUser', () => {
    it('should return success when user does not exist', async () => {
      const joinUserDto: JoinUserDto = {
        userEmail: 'test@example.com',
        password: '1234'
      };

      (usersRepository.existCheckUser as jest.Mock<Promise<Users | null>>).mockResolvedValueOnce(null);
      const result = await service.joinUser(joinUserDto);

      expect(usersRepository.existCheckUser).toHaveBeenCalledWith(joinUserDto.userEmail);
      expect(usersRepository.joinUser).toHaveBeenCalledWith(joinUserDto);
      expect(result).toBe('success');
    });

    it('should return fail when user exists', async () => {
      const joinUserDto: JoinUserDto = {
        userEmail: 'test@example.com',
        password: '1234'
      };

      const existingUser: Users = {
        userEmail: 'test@example.com',
        password: '1234',
        id: 0,
        created_at: undefined,
        updated_at: undefined,
        deleted_at: undefined,
        hashPassword: function (): Promise<void> {
          throw new Error('Function not implemented.');
        }
      };

      (usersRepository.existCheckUser as jest.Mock<Promise<Users | null>>).mockResolvedValueOnce(existingUser);
      const result = await service.joinUser(joinUserDto);

      expect(usersRepository.existCheckUser).toHaveBeenCalledWith(joinUserDto.userEmail);
      expect(usersRepository.joinUser).not.toHaveBeenCalled();
      expect(result).toBe('fail');
    });
  });
});
