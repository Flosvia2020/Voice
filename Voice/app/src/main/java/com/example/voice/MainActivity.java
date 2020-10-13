package com.example.voice;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import java.net.IDN;

public class MainActivity extends AppCompatActivity {

    TextView textView;
    EditText id_txt;
    EditText pw_txt;
    Button sign_in_btn;
    String Id;
    String Pw;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        textView = (TextView)findViewById(R.id.sign_up_txt);
        sign_in_btn = (Button)findViewById(R.id.signin_btn);


        id_txt = (EditText)findViewById(R.id.signin_id_txt);
        pw_txt = (EditText)findViewById(R.id.signin_pw_txt);



//        id_txt.setOnKeyListener(new View.OnKeyListener() {
//            private int keyCode;
//
//            @Override
//            public boolean onKey(View view, int i, KeyEvent keyEvent) {
//                if((keyEvent.getAction() == KeyEvent.ACTION_DOWN) && keyCode == KeyEvent.KEYCODE_ENTER){
//                    pw_txt.requestFocus();
//                    return true;
//                }
//                return false;
//            }
//        });
        sign_in_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                if(id_txt.getText().toString().length() == 0 && pw_txt.getText().toString().length() == 0) {
                    Toast.makeText(getApplicationContext(), "아이디와 비밀번호를 입력하세요.", Toast.LENGTH_SHORT).show();
                }
                else if(id_txt.getText().toString().length() == 0 && pw_txt.getText().toString().length() > 0) {
                    Toast.makeText(getApplicationContext(), "아이디를 입력하세요.", Toast.LENGTH_SHORT).show();
                }
                else if(id_txt.getText().toString().length() > 0 && pw_txt.getText().toString().length() == 0) {
                    Toast.makeText(getApplicationContext(), "비밀번호를 입력하세요.", Toast.LENGTH_SHORT).show();
                }
                else{

                    Intent intent = new Intent(MainActivity.this, Field.class);
                    startActivity(intent);
                    Toast.makeText(getApplicationContext(), "로그인 성공", Toast.LENGTH_SHORT).show();
                }

            }
        });


        textView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MainActivity.this, Signup.class);
                startActivity(intent);
            }
        });
    }
}