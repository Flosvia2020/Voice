package com.example.voice_android_restart;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import java.util.HashMap;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class Sign_in extends AppCompatActivity {

    private Retrofit retrofit;
    private RetrofitInterface retrofitInterface;
    private String BASE_URL = "http://dsm-voice.herokuapp.com/api";
    EditText id, pw;
    Button Login;
    String id_str, pw_str;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.sign_in);
        System.out.println("------------------------------------------------------------------------------------------------------------------");
        retrofit = new Retrofit.Builder()
                .baseUrl(BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        retrofitInterface = retrofit.create(RetrofitInterface.class);
        id = findViewById(R.id.signin_id);
        pw = findViewById(R.id.signin_pw);
        Login = findViewById(R.id.signin_btn);
        Login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
//                System.out.println("==============================================================================================================");
//                Toast.makeText(Sign_in.this, "토스트 메시지 띄우기 성공~!", Toast.LENGTH_SHORT).show();
//                id_str = id.getText().toString();
//                System.out.println(id_str);
//               pw_str = pw.getText().toString();
//                System.out.println(pw_str);
                HashMap<String, String> map = new HashMap<>();

                map.put("id", id.getText().toString());
                map.put("pw", pw.getText().toString());

                Call<LoginResult> call = retrofitInterface.executeLogin(map);

                call.enqueue(new Callback<LoginResult>() {
                    @Override
                    public void onResponse(Call<LoginResult> call, Response<LoginResult> response) {

//                        System.out.println("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
                    }

                    @Override
                    public void onFailure(Call<LoginResult> call, Throwable t) {

                    }
                });
            }
        });

    }
}
