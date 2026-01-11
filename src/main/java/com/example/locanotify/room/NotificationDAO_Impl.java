package com.example.locanotify.room;

import android.database.Cursor;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.lifecycle.LiveData;
import androidx.room.CoroutinesRoom;
import androidx.room.EntityDeletionOrUpdateAdapter;
import androidx.room.EntityInsertionAdapter;
import androidx.room.RoomDatabase;
import androidx.room.RoomSQLiteQuery;
import androidx.room.util.CursorUtil;
import androidx.room.util.DBUtil;
import androidx.sqlite.db.SupportSQLiteStatement;
import java.lang.Class;
import java.lang.Exception;
import java.lang.Object;
import java.lang.Override;
import java.lang.String;
import java.lang.SuppressWarnings;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.Callable;
import javax.annotation.processing.Generated;
import kotlin.Unit;
import kotlin.coroutines.Continuation;

@Generated("androidx.room.RoomProcessor")
@SuppressWarnings({"unchecked", "deprecation"})
public final class NotificationDAO_Impl implements NotificationDAO {
  private final RoomDatabase __db;

  private final EntityInsertionAdapter<Notification> __insertionAdapterOfNotification;

  private final EntityDeletionOrUpdateAdapter<Notification> __deletionAdapterOfNotification;

  private final EntityDeletionOrUpdateAdapter<Notification> __updateAdapterOfNotification;

  public NotificationDAO_Impl(@NonNull final RoomDatabase __db) {
    this.__db = __db;
    this.__insertionAdapterOfNotification = new EntityInsertionAdapter<Notification>(__db) {
      @Override
      @NonNull
      protected String createQuery() {
        return "INSERT OR IGNORE INTO `notificationTable` (`title`,`description`,`timestamp`,`latitude`,`longitude`,`id`) VALUES (?,?,?,?,?,nullif(?, 0))";
      }

      @Override
      protected void bind(@NonNull final SupportSQLiteStatement statement,
          @NonNull final Notification entity) {
        statement.bindString(1, entity.getNotificationTitle());
        statement.bindString(2, entity.getNotificationDescription());
        statement.bindString(3, entity.getTimeStamp());
        statement.bindDouble(4, entity.getLatitude());
        statement.bindDouble(5, entity.getLongitude());
        statement.bindLong(6, entity.getId());
      }
    };
    this.__deletionAdapterOfNotification = new EntityDeletionOrUpdateAdapter<Notification>(__db) {
      @Override
      @NonNull
      protected String createQuery() {
        return "DELETE FROM `notificationTable` WHERE `id` = ?";
      }

      @Override
      protected void bind(@NonNull final SupportSQLiteStatement statement,
          @NonNull final Notification entity) {
        statement.bindLong(1, entity.getId());
      }
    };
    this.__updateAdapterOfNotification = new EntityDeletionOrUpdateAdapter<Notification>(__db) {
      @Override
      @NonNull
      protected String createQuery() {
        return "UPDATE OR ABORT `notificationTable` SET `title` = ?,`description` = ?,`timestamp` = ?,`latitude` = ?,`longitude` = ?,`id` = ? WHERE `id` = ?";
      }

      @Override
      protected void bind(@NonNull final SupportSQLiteStatement statement,
          @NonNull final Notification entity) {
        statement.bindString(1, entity.getNotificationTitle());
        statement.bindString(2, entity.getNotificationDescription());
        statement.bindString(3, entity.getTimeStamp());
        statement.bindDouble(4, entity.getLatitude());
        statement.bindDouble(5, entity.getLongitude());
        statement.bindLong(6, entity.getId());
        statement.bindLong(7, entity.getId());
      }
    };
  }

  @Override
  public Object insert(final Notification notification,
      final Continuation<? super Unit> $completion) {
    return CoroutinesRoom.execute(__db, true, new Callable<Unit>() {
      @Override
      @NonNull
      public Unit call() throws Exception {
        __db.beginTransaction();
        try {
          __insertionAdapterOfNotification.insert(notification);
          __db.setTransactionSuccessful();
          return Unit.INSTANCE;
        } finally {
          __db.endTransaction();
        }
      }
    }, $completion);
  }

  @Override
  public Object delete(final Notification notification,
      final Continuation<? super Unit> $completion) {
    return CoroutinesRoom.execute(__db, true, new Callable<Unit>() {
      @Override
      @NonNull
      public Unit call() throws Exception {
        __db.beginTransaction();
        try {
          __deletionAdapterOfNotification.handle(notification);
          __db.setTransactionSuccessful();
          return Unit.INSTANCE;
        } finally {
          __db.endTransaction();
        }
      }
    }, $completion);
  }

  @Override
  public Object update(final Notification note, final Continuation<? super Unit> $completion) {
    return CoroutinesRoom.execute(__db, true, new Callable<Unit>() {
      @Override
      @NonNull
      public Unit call() throws Exception {
        __db.beginTransaction();
        try {
          __updateAdapterOfNotification.handle(note);
          __db.setTransactionSuccessful();
          return Unit.INSTANCE;
        } finally {
          __db.endTransaction();
        }
      }
    }, $completion);
  }

  @Override
  public LiveData<List<Notification>> getAllNotes() {
    final String _sql = "Select * from notificationTable order by id ASC";
    final RoomSQLiteQuery _statement = RoomSQLiteQuery.acquire(_sql, 0);
    return __db.getInvalidationTracker().createLiveData(new String[] {"notificationTable"}, false, new Callable<List<Notification>>() {
      @Override
      @Nullable
      public List<Notification> call() throws Exception {
        final Cursor _cursor = DBUtil.query(__db, _statement, false, null);
        try {
          final int _cursorIndexOfNotificationTitle = CursorUtil.getColumnIndexOrThrow(_cursor, "title");
          final int _cursorIndexOfNotificationDescription = CursorUtil.getColumnIndexOrThrow(_cursor, "description");
          final int _cursorIndexOfTimeStamp = CursorUtil.getColumnIndexOrThrow(_cursor, "timestamp");
          final int _cursorIndexOfLatitude = CursorUtil.getColumnIndexOrThrow(_cursor, "latitude");
          final int _cursorIndexOfLongitude = CursorUtil.getColumnIndexOrThrow(_cursor, "longitude");
          final int _cursorIndexOfId = CursorUtil.getColumnIndexOrThrow(_cursor, "id");
          final List<Notification> _result = new ArrayList<Notification>(_cursor.getCount());
          while (_cursor.moveToNext()) {
            final Notification _item;
            final String _tmpNotificationTitle;
            _tmpNotificationTitle = _cursor.getString(_cursorIndexOfNotificationTitle);
            final String _tmpNotificationDescription;
            _tmpNotificationDescription = _cursor.getString(_cursorIndexOfNotificationDescription);
            final String _tmpTimeStamp;
            _tmpTimeStamp = _cursor.getString(_cursorIndexOfTimeStamp);
            final double _tmpLatitude;
            _tmpLatitude = _cursor.getDouble(_cursorIndexOfLatitude);
            final double _tmpLongitude;
            _tmpLongitude = _cursor.getDouble(_cursorIndexOfLongitude);
            _item = new Notification(_tmpNotificationTitle,_tmpNotificationDescription,_tmpTimeStamp,_tmpLatitude,_tmpLongitude);
            final int _tmpId;
            _tmpId = _cursor.getInt(_cursorIndexOfId);
            _item.setId(_tmpId);
            _result.add(_item);
          }
          return _result;
        } finally {
          _cursor.close();
        }
      }

      @Override
      protected void finalize() {
        _statement.release();
      }
    });
  }

  @NonNull
  public static List<Class<?>> getRequiredConverters() {
    return Collections.emptyList();
  }
}
