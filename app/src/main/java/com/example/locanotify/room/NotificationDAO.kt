package com.example.locanotify.room

import androidx.lifecycle.LiveData
import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import androidx.room.Update

// annotation for dao class.
@Dao
interface NotificationDAO {

    // below is the insert method for
    // adding a new entry to our database.
    @Insert(onConflict = OnConflictStrategy.IGNORE)
    suspend fun insert(notification: Notification)

    // below is the delete method
    // for deleting our note.
    @Delete
    suspend fun delete(notification: Notification)

    // below is the method to read all the notes
    // from our database we have specified the query for it.
    // inside the query we are arranging it in ascending
    // order on below line and we are specifying
    // the table name from which
    // we have to get the data.
    @Query("Select * from notificationTable order by id ASC")
    fun getAllNotes(): LiveData<List<Notification>>

    // below method is use to update the note.
    @Update
    suspend fun update(note: Notification)
}
