package com.tasknest.backend.controller;

import com.tasknest.backend.model.Task;
import com.tasknest.backend.repository.TaskRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*") // For frontend CORS
public class TaskController {

    private final TaskRepository taskRepo;

    public TaskController(TaskRepository taskRepo) {
        this.taskRepo = taskRepo;
    }

    @GetMapping
    public List<Task> getAllTasks() {
        return taskRepo.findAll();
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskRepo.save(task);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Task> updateTaskStatus(@PathVariable Long id, @RequestBody Map<String, String> body) {
        return taskRepo.findById(id).map(task -> {
            task.setStatus(body.get("status"));
            taskRepo.save(task);
            return ResponseEntity.ok(task);
    }).orElse(ResponseEntity.notFound().build());
}

}
