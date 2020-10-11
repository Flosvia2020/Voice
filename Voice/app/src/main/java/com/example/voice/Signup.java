package com.example.voice;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class Signup extends AppCompatActivity {

    TextView textView;
    EditText nick_txt;
    EditText id_txt;
    EditText pw_txt;
    EditText pw_ch_txt;
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.signup);

        nick_txt = findViewById(R.id.signup_nick_txt);
        id_txt = findViewById(R.id.signup_id_txt);
        pw_txt = findViewById(R.id.signin_pw_txt);
        pw_ch_txt = findViewById(R.id.signup_pw_ch_txt);


        


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