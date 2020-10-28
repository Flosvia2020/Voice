package com.example.voice;

import android.media.Image;
import android.os.Bundle;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.Toolbar;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class Field extends AppCompatActivity {

    ImageButton pen;
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.field);
        pen = (ImageButton)findViewById(R.id.field_pen_btn);
    }
}