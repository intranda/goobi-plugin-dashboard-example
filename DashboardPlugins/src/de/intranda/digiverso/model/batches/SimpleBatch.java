package de.intranda.digiverso.model.batches;

import java.util.Date;

import lombok.Data;

@Data
public class SimpleBatch {

    private Integer id;
    private String batchName;
    private Date startDate;
    private Date endDate;
    private Integer totalProcesses;

    private int numberOfLockedTasks; // red bar
    private int numberOfOpenTasks; // part of yellow bar
    private int numberOfTasksInWork; // part of yellow bar
    private int numberOfFinishedTasks; // green bar
    private int numberOfErrorTasks; // part of yellow bar
    private int numberOfDeactivatedTasks; // deactivated tasks are ignored
    
    private String startDateJson;
    private String endDateJson;
    
    // get size of red bar as percentage 
    public double getProgressUnprocessed() {
        double value = (numberOfLockedTasks * 100) / (numberOfLockedTasks + numberOfOpenTasks
                + numberOfTasksInWork + numberOfFinishedTasks + numberOfErrorTasks);
        return value;
    }

    // get size of yellow bar as percentage
    public double getProgressProcessed() {
        double unprocessed = numberOfOpenTasks + numberOfTasksInWork + numberOfErrorTasks;
        double value = (unprocessed * 100) / (numberOfLockedTasks + numberOfOpenTasks + numberOfTasksInWork + numberOfFinishedTasks
                + numberOfErrorTasks);
        return value;
    }

    // get size of red bar as percentage
    public double getProgressReturned() {
        double value = 100 - getProgressUnprocessed() - getProgressProcessed();
		return value;
    }

}