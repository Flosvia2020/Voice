package com.example.voice;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class Signup extends AppCompatActivity {

    TextView textView;
    EditText nick_txt;
    EditText id_txt;
    EditText pw_txt;
    EditText pw_ch_txt;
    Button sign_up_btn;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.signup);

        nick_txt = findViewById(R.id.signup_nick_txt);
        id_txt = findViewById(R.id.signup_id_txt);
        pw_txt = findViewById(R.id.signup_pw_txt);
        pw_ch_txt = findViewById(R.id.signup_pw_ch_txt);
        sign_up_btn = findViewById(R.id.signup_btn);

        sign_up_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (nick_txt.getText().toString().length() == 0)
                    Toast.makeText(getApplicationContext(), "닉네임을 입력하세요.", Toast.LENGTH_SHORT).show();
                else if (id_txt.getText().toString().length() == 0)
                    Toast.makeText(getApplicationContext(), "아이디를 입력하세요.", Toast.LENGTH_SHORT).show();
                else if (pw_txt.getText().toString().length() == 0)
                    Toast.makeText(getApplicationContext(), "비밀번호를 입력하세요.", Toast.LENGTH_SHORT).show();
                else if (pw_ch_txt.getText().toString().length() == 0)
                    Toast.makeText(getApplicationContext(), "비밀번호 확인을 입력하세요.", Toast.LENGTH_SHORT).show();
                else if (pw_txt.getText().toString().equals(pw_ch_txt.getText().toString()) ){
                    Toast.makeText(getApplicationContext(), "회원가입 성공", Toast.LENGTH_SHORT).show();
                    Intent intent = new Intent(Signup.this, MainActivity.class);
                    startActivity(intent);
                }
                else if (pw_txt.getText().toString() != pw_ch_txt.getText().toString()){
                    Toast.makeText(getApplicationContext(), "비밀번호가 일치하지 않습니다.", Toast.LENGTH_SHORT).show();
                }

//                if(id_txt.getText().toString().length() == 0 && pw_txt.getText().toString().length() == 0 && pw_ch_txt.getText().toString().length() == 0) {
//                    Toast.makeText(getApplicationContext(), "아이디와 비밀번호를 입력하세요.", Toast.LENGTH_SHORT).show();
//                }
//                else if(id_txt.getText().toString().length() == 0 && pw_txt.getText().toString().length() > 0 && pw_ch_txt.getText().toString().length() > 0) {
//                    Toast.makeText(getApplicationContext(), "아이디를 입력하세요.", Toast.LENGTH_SHORT).show();
//                }
//                else if(id_txt.getText().toString().length() > 0 && pw_txt.getText().toString().length() == 0 && pw_txt.getText().toString().length() == 0) {
//                    Toast.makeText(getApplicationContext(), "비밀번호를 입력하세요.", Toast.LENGTH_SHORT).show();
//                }
//                else if(id_txt.getText().toString().length() > 0 && pw_txt.getText().toString().length() > 0 && pw_txt.getText().toString().length() == 0) {
//                    Toast.makeText(getApplicationContext(), "비밀번호를 입력하세요.", Toast.LENGTH_SHORT).show();
//                }
//                else if(id_txt.getText().toString().length() > 0 && pw_txt.getText().toString().length() == 0 && pw_txt.getText().toString().length() > 0) {
//                    Toast.makeText(getApplicationContext(), "비밀번호를 입력하세요.", Toast.LENGTH_SHORT).show();
//                }
//                else if (pw_txt.getText().toString() == pw_ch_txt.getText().toString()){
//                    Toast.makeText(getApplicationContext(), "비밀번호가 일치하지 않습니다.", Toast.LENGTH_SHORT).show();
//                }
//                else{
//
//                    Intent intent = new Intent(Signup.this, MainActivity.class);
//                    startActivity(intent);
//                    Toast.makeText(getApplicationContext(), "회원가입 성공", Toast.LENGTH_SHORT).show();
//                }

            }
        });

        textView = (TextView)findViewById(R.id.sign_in_txt);
        textView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(Signup.this, MainActivity.class);
                startActivity(intent);
            }
        });
    }
}