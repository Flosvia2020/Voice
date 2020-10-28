package com.example.voice;

import android.content.Intent;
import android.graphics.drawable.AnimationDrawable;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageButton;
import android.widget.ImageView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class Intro extends AppCompatActivity {

   // ImageView spin;
    //AnimationDrawable animationDrawable;
    //Animation mAnim2;

//
//    @Override
//    public void onWindowFocusChanged(boolean hasFocus) {
//        super.onWindowFocusChanged(hasFocus);
//
//        spin = findViewById(R.id.intro_anim);
//
//        mAnim2 = AnimationUtils.loadAnimation(getApplicationContext(), R.anim.spin_animation);
//        mAnim2.setInterpolator(getApplicationContext(), android.R.anim.anticipate_overshoot_interpolator);
//
//        if (hasFocus) {
//            mAnim2.start();
//        } else {
//            mAnim2.reset();
//        }
//    }

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.intro);
        //spin = AnimationUtils.loadAnimation(getApplicationContext(),R.anim.spin_animation);





        Handler handler = new Handler();
        handler.postDelayed(new Runnable() {
            public void run() {
                Intent intent = new Intent(Intro.this, MainActivity.class);
                startActivity(intent);
                finish();
            }
        }, 1530);
    }
}

