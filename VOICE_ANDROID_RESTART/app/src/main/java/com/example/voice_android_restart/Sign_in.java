package com.example.voice_android_restart;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class Sign_in extends AppCompatActivity {

    EditText id, pw;
    Button enter;
    private String id_str, pw_str;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.sign_in);

        id = findViewById(R.id.signin_id);
        pw = findViewById(R.id.signin_pw);
        enter = findViewById(R.id.signin_btn);
        enter.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(Sign_in.this, "토스트 메시지 띄우기 성공~!", Toast.LENGTH_SHORT).show();
                id_str = id.getText().toString();
                System.out.println(id_str);
                pw_str = pw.getText().toString();
                System.out.println(pw_str);
            }
        });

    }
}
