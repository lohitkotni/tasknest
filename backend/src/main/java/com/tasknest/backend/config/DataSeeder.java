
package com.tasknest.backend.config;

import com.tasknest.backend.model.Task;
import com.tasknest.backend.repository.TaskRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seedDatabase(TaskRepository repo) {
        return args -> {
            if (repo.count() == 0) {
                repo.save(new Task(null, "Build backend", "to-do"));
                repo.save(new Task(null, "Set up PostgreSQL", "done"));
                repo.save(new Task(null, "Design frontend UI", "in-progress"));
            }
        };
    }
}
