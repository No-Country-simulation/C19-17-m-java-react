package com.timekeeper.security.service;

import com.timekeeper.security.interfaces.IUser;
import com.timekeeper.security.model.User;
import com.timekeeper.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements IUser {
    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public void deleteUser(long userId) {
        userRepository.deleteById(userId);
    }

    @Override
    public User getUserByUserId(long userId) {
        return userRepository.findById(userId);
    }

    @Override
    public User getUserByUserName(String userName) {
        return userRepository.findByUsername(userName).orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Override
    public User updateUser(long userId, User updatedUser) {
        User existingUser = userRepository.findById(userId);
        if (existingUser != null) {
            existingUser.setFirstname(updatedUser.getFirstname());
            existingUser.setLastname(updatedUser.getLastname());
            existingUser.setUsername(updatedUser.getUsername());
            existingUser.setEmail(updatedUser.getEmail());

            userRepository.save(existingUser);
        } else {
            throw new UserNotFoundException("User with ID " + userId + " not found");
        }
        return existingUser;
    }

    public static class UserNotFoundException extends RuntimeException {
        public UserNotFoundException(String message) {
            super(message);
        }
    }
}
